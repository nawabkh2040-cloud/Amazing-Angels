# Favicon Setup Script for Amazing Angels Public School
# This script helps prepare logo files for web use

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Amazing Angels - Favicon Setup Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Set project directory
$projectDir = "c:\My Web Sites\Angle School\Amazing-Angels"
$publicDir = Join-Path $projectDir "public"
$assetsDir = Join-Path $projectDir "src\assets"

Write-Host "Project Directory: $projectDir" -ForegroundColor Yellow
Write-Host "Public Directory: $publicDir" -ForegroundColor Yellow
Write-Host ""

# Check if directories exist
if (-not (Test-Path $publicDir)) {
    Write-Host "❌ Error: Public directory not found!" -ForegroundColor Red
    exit
}

if (-not (Test-Path $assetsDir)) {
    Write-Host "❌ Error: Assets directory not found!" -ForegroundColor Red
    exit
}

Write-Host "✅ Directories found!" -ForegroundColor Green
Write-Host ""

# Check existing logo files in assets
Write-Host "📂 Checking existing logo files in assets..." -ForegroundColor Cyan
$logoFiles = Get-ChildItem -Path $assetsDir -Filter "*logo*"

if ($logoFiles.Count -gt 0) {
    Write-Host "Found logo files:" -ForegroundColor Green
    foreach ($file in $logoFiles) {
        Write-Host "  • $($file.Name)" -ForegroundColor White
    }
} else {
    Write-Host "⚠️  No logo files found in assets directory" -ForegroundColor Yellow
}

Write-Host ""

# Check existing favicon files in public
Write-Host "📂 Checking existing favicon/logo files in public..." -ForegroundColor Cyan
$existingFiles = @(
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "apple-touch-icon.png",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "logo.png",
    "og-image.jpg",
    "twitter-image.jpg"
)

$missingFiles = @()

foreach ($file in $existingFiles) {
    $filePath = Join-Path $publicDir $file
    if (Test-Path $filePath) {
        $fileInfo = Get-Item $filePath
        $sizeKB = [math]::Round($fileInfo.Length / 1KB, 2)
        Write-Host "  ✅ $file ($sizeKB KB)" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file (missing)" -ForegroundColor Red
        $missingFiles += $file
    }
}

Write-Host ""

# Summary
if ($missingFiles.Count -eq 0) {
    Write-Host "🎉 All favicon files are present!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Clear browser cache (Ctrl + Shift + Delete)" -ForegroundColor White
    Write-Host "  2. Visit your website" -ForegroundColor White
    Write-Host "  3. Check if logo appears in browser tab" -ForegroundColor White
    Write-Host "  4. Test on mobile device" -ForegroundColor White
    Write-Host "  5. Test social sharing with Facebook Debugger" -ForegroundColor White
} else {
    Write-Host "⚠️  Missing $($missingFiles.Count) file(s):" -ForegroundColor Yellow
    foreach ($file in $missingFiles) {
        Write-Host "     • $file" -ForegroundColor White
    }
    Write-Host ""
    Write-Host "🔧 To create missing files:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Option 1 (Easiest):" -ForegroundColor Yellow
    Write-Host "  1. Visit: https://favicon.io/favicon-converter/" -ForegroundColor White
    Write-Host "  2. Upload your logo image" -ForegroundColor White
    Write-Host "  3. Download the generated files" -ForegroundColor White
    Write-Host "  4. Copy all files to: $publicDir" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 2 (Manual):" -ForegroundColor Yellow
    Write-Host "  1. Open FAVICON-SETUP-GUIDE.md for detailed instructions" -ForegroundColor White
    Write-Host "  2. Use Paint or online tools to resize images" -ForegroundColor White
    Write-Host "  3. Save with exact file names to: $publicDir" -ForegroundColor White
}

Write-Host ""
Write-Host "📚 For detailed instructions, see: FAVICON-SETUP-GUIDE.md" -ForegroundColor Cyan
Write-Host ""

# Offer to copy existing logo to public directory
if ($logoFiles.Count -gt 0) {
    Write-Host "💡 Quick Action:" -ForegroundColor Yellow
    $response = Read-Host "Do you want to copy 'logo.jpg' to public folder as 'logo.png'? (Y/N)"
    
    if ($response -eq 'Y' -or $response -eq 'y') {
        $sourceFile = Join-Path $assetsDir "logo.jpg"
        $destFile = Join-Path $publicDir "logo.png"
        
        if (Test-Path $sourceFile) {
            Copy-Item $sourceFile -Destination $destFile -Force
            Write-Host "✅ Copied logo.jpg to public/logo.png" -ForegroundColor Green
            Write-Host "⚠️  Note: You still need to resize this to 512x512 for best results" -ForegroundColor Yellow
        } else {
            Write-Host "❌ logo.jpg not found in assets" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "         Setup Check Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Pause to keep window open
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
