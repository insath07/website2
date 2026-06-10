$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.IO.Compression

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$SourcePath = Join-Path $PSScriptRoot 'final-report-source.md'
$OutputPath = Join-Path $ProjectRoot 'Gen-Ardent_IT1308_Final_Report.docx'

if (Test-Path -LiteralPath $OutputPath) {
  $stamp = Get-Date -Format 'yyyyMMdd_HHmmss'
  $OutputPath = Join-Path $ProjectRoot "Gen-Ardent_IT1308_Final_Report_$stamp.docx"
}

$Report = Get-Content -LiteralPath $SourcePath -Raw
$Parts = New-Object System.Collections.Generic.List[string]

function Escape-Xml([string]$Value) {
  if ($null -eq $Value) { return '' }
  return $Value.Replace('&', '&amp;').Replace('<', '&lt;').Replace('>', '&gt;')
}

function Add-Paragraph([string]$Text, [string]$Style = 'Normal', [string]$Align = 'both') {
  $escaped = Escape-Xml $Text
  $styleXml = if ($Style -ne 'Normal') { '<w:pStyle w:val="' + $Style + '"/>' } else { '' }
  $jcXml = if ($Align) { '<w:jc w:val="' + $Align + '"/>' } else { '' }
  $spacingXml = if ($Style -eq 'Code') { '<w:spacing w:after="80"/>' } else { '<w:spacing w:line="360" w:lineRule="auto" w:after="160"/>' }
  $Parts.Add('<w:p><w:pPr>' + $styleXml + $jcXml + $spacingXml + '</w:pPr><w:r><w:t xml:space="preserve">' + $escaped + '</w:t></w:r></w:p>')
}

function Add-PageBreak {
  $Parts.Add('<w:p><w:r><w:br w:type="page"/></w:r></w:p>')
}

function Add-Table([object[]]$Rows) {
  if ($Rows.Count -eq 0) { return }
  $builder = New-Object System.Text.StringBuilder
  [void]$builder.Append('<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/><w:tblBorders><w:top w:val="single" w:sz="4" w:space="0" w:color="666666"/><w:left w:val="single" w:sz="4" w:space="0" w:color="666666"/><w:bottom w:val="single" w:sz="4" w:space="0" w:color="666666"/><w:right w:val="single" w:sz="4" w:space="0" w:color="666666"/><w:insideH w:val="single" w:sz="4" w:space="0" w:color="666666"/><w:insideV w:val="single" w:sz="4" w:space="0" w:color="666666"/></w:tblBorders><w:tblCellMar><w:top w:w="80" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tblCellMar></w:tblPr>')
  for ($rowIndex = 0; $rowIndex -lt $Rows.Count; $rowIndex++) {
    $isHeader = $rowIndex -eq 0
    [void]$builder.Append('<w:tr>')
    foreach ($cell in $Rows[$rowIndex]) {
      $escaped = Escape-Xml ([string]$cell)
      $shading = if ($isHeader) { '<w:shd w:fill="D9EAF7"/>' } else { '' }
      $bold = if ($isHeader) { '<w:b/>' } else { '' }
      [void]$builder.Append('<w:tc><w:tcPr><w:tcW w:w="0" w:type="auto"/>' + $shading + '</w:tcPr><w:p><w:pPr><w:spacing w:line="360" w:lineRule="auto" w:after="80"/></w:pPr><w:r><w:rPr>' + $bold + '<w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="22"/></w:rPr><w:t xml:space="preserve">' + $escaped + '</w:t></w:r></w:p></w:tc>')
    }
    [void]$builder.Append('</w:tr>')
  }
  [void]$builder.Append('</w:tbl>')
  $Parts.Add($builder.ToString())
}

function Flush-Table([System.Collections.Generic.List[string]]$TableLines) {
  if ($TableLines.Count -eq 0) { return }
  $rows = @()
  foreach ($line in $TableLines) {
    $cells = $line.Trim().Trim('|') -split '\|' | ForEach-Object { $_.Trim() }
    if (($cells -join '') -match '^[\s:-]+$') { continue }
    $rows += ,$cells
  }
  Add-Table $rows
}

$tableLines = New-Object System.Collections.Generic.List[string]
$codeMode = $false

foreach ($rawLine in ($Report -split "`r?`n")) {
  $line = $rawLine.TrimEnd()
  if ($line.TrimStart().StartsWith('|')) {
    $tableLines.Add($line)
    continue
  }

  if ($tableLines.Count -gt 0) {
    Flush-Table $tableLines
    $tableLines.Clear()
  }

  if ($line.Trim().StartsWith('```')) {
    $codeMode = -not $codeMode
    continue
  }

  if ($codeMode) {
    Add-Paragraph $line 'Code' 'left'
    continue
  }

  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  if ($line -eq '[[PAGE_BREAK]]') { Add-PageBreak; continue }
  if ($line.StartsWith('[[CENTER]]')) { Add-Paragraph $line.Substring(10) 'Normal' 'center'; continue }
  if ($line.StartsWith('### ')) { Add-Paragraph $line.Substring(4) 'Heading3' 'left'; continue }
  if ($line.StartsWith('## ')) { Add-Paragraph $line.Substring(3) 'Heading2' 'left'; continue }
  if ($line.StartsWith('# ')) { Add-Paragraph $line.Substring(2) 'Heading1' 'left'; continue }
  Add-Paragraph $line 'Normal' 'both'
}

if ($tableLines.Count -gt 0) { Flush-Table $tableLines }

$body = ($Parts -join "`n") + '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr>'
$documentXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" mc:Ignorable=""><w:body>' + $body + '</w:body></w:document>'

$stylesXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:jc w:val="both"/><w:spacing w:line="360" w:lineRule="auto" w:after="160"/></w:pPr></w:pPrDefault></w:docDefaults>
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/></w:rPr><w:pPr><w:jc w:val="both"/><w:spacing w:line="360" w:lineRule="auto" w:after="160"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:rPr><w:b/><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="32"/></w:rPr><w:pPr><w:spacing w:before="240" w:after="160"/><w:keepNext/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:rPr><w:b/><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="28"/></w:rPr><w:pPr><w:spacing w:before="200" w:after="120"/><w:keepNext/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:rPr><w:b/><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="26"/></w:rPr><w:pPr><w:spacing w:before="160" w:after="100"/><w:keepNext/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Code"><w:name w:val="Code"/><w:basedOn w:val="Normal"/><w:rPr><w:rFonts w:ascii="Courier New" w:hAnsi="Courier New"/><w:sz w:val="20"/></w:rPr><w:pPr><w:jc w:val="left"/><w:spacing w:after="80"/></w:pPr></w:style>
</w:styles>
'@

$contentTypes = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
'@

$relsRoot = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
'@

$docRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
</Relationships>
'@

$settingsXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:zoom w:percent="100"/><w:defaultTabStop w:val="720"/></w:settings>'
$created = (Get-Date).ToUniversalTime().ToString('s') + 'Z'
$coreXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>Gen-Ardent IT1308 Final Report</dc:title><dc:subject>Web Application Development Documentation</dc:subject><dc:creator>Codex</dc:creator><cp:keywords>IT1308, Gen-Ardent, Web Application</cp:keywords><dcterms:created xsi:type="dcterms:W3CDTF">' + $created + '</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">' + $created + '</dcterms:modified></cp:coreProperties>'
$appXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Word</Application><Company>Gen-Ardent Immigration Inc Sri Lanka</Company></Properties>'

$tempRoot = [System.IO.Path]::GetTempPath()
$temp = Join-Path $tempRoot ('GenArdentDocx_' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $temp | Out-Null
New-Item -ItemType Directory -Path (Join-Path $temp '_rels') | Out-Null
New-Item -ItemType Directory -Path (Join-Path $temp 'docProps') | Out-Null
New-Item -ItemType Directory -Path (Join-Path $temp 'word') | Out-Null
New-Item -ItemType Directory -Path (Join-Path $temp 'word\_rels') | Out-Null

$utf8 = New-Object System.Text.UTF8Encoding($false)
[IO.File]::WriteAllText((Join-Path $temp '[Content_Types].xml'), $contentTypes, $utf8)
[IO.File]::WriteAllText((Join-Path $temp '_rels\.rels'), $relsRoot, $utf8)
[IO.File]::WriteAllText((Join-Path $temp 'docProps\core.xml'), $coreXml, $utf8)
[IO.File]::WriteAllText((Join-Path $temp 'docProps\app.xml'), $appXml, $utf8)
[IO.File]::WriteAllText((Join-Path $temp 'word\document.xml'), $documentXml, $utf8)
[IO.File]::WriteAllText((Join-Path $temp 'word\styles.xml'), $stylesXml, $utf8)
[IO.File]::WriteAllText((Join-Path $temp 'word\settings.xml'), $settingsXml, $utf8)
[IO.File]::WriteAllText((Join-Path $temp 'word\_rels\document.xml.rels'), $docRels, $utf8)

$archive = [System.IO.Compression.ZipFile]::Open($OutputPath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  Get-ChildItem -LiteralPath $temp -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($temp.Length + 1).Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $relativePath, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
  }
}
finally {
  $archive.Dispose()
}

$zip = [System.IO.Compression.ZipFile]::OpenRead($OutputPath)
try {
  $entries = $zip.Entries | Select-Object -ExpandProperty FullName
  if ($entries -notcontains 'word/document.xml') { throw 'DOCX validation failed: missing word/document.xml' }
  if ($entries -notcontains '[Content_Types].xml') { throw 'DOCX validation failed: missing [Content_Types].xml' }
}
finally {
  $zip.Dispose()
}

$resolvedTemp = [System.IO.Path]::GetFullPath($temp)
$resolvedTempRoot = [System.IO.Path]::GetFullPath($tempRoot)
if ($resolvedTemp.StartsWith($resolvedTempRoot, [System.StringComparison]::OrdinalIgnoreCase) -and (Split-Path -Leaf $resolvedTemp).StartsWith('GenArdentDocx_')) {
  Remove-Item -LiteralPath $resolvedTemp -Recurse -Force
}

Get-Item -LiteralPath $OutputPath | Select-Object FullName,Length,LastWriteTime
