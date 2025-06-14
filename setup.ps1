mkdir .\site-files

Copy-Item .\assets -Recurse -Destination .\site-files
Copy-Item .\index.html -Destination .\site-files
Copy-Item .\projects.html -Destination .\site-files
Copy-Item .\about.html -Destination .\site-files

$utils = Read-Host "Do you want to install Charlys Site-Git-Utils? (y/n)"
if ($utils -eq "y") {
    git clone https://github.com/Charly-Hudson/site-git-utils.git
    .\site-git-utils\util\setup\main.ps1
}
else {
    Write-Host "Skipping..."
}

Write-Host "Starting Cleanup..."

$cleanupFolder = Join-Path (Get-Location) "static-site-files"

Start-Process powershell -ArgumentList "-NoProfile -WindowStyle Hidden -Command `"Start-Sleep -Seconds 1; Remove-Item -Path '$cleanupFolder' -Recurse -Force`""