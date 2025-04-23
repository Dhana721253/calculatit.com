$url = "https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi"
$output = "$PSScriptRoot\node_installer.msi"
Invoke-WebRequest -Uri $url -OutFile $output
Start-Process msiexec.exe -Wait -ArgumentList "/i $output /passive"
Remove-Item $output
