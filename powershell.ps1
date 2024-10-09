# Connect to Azure
Connect-AzAccount

# Define parameters
$storageAccountName = "mystorageaccount"
$resourceGroupName = "myResourceGroup"
$location = "West Europe"

# Check if the resource group exists
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue

# Create the resource group if it doesn't exist
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
    -Name $storageAccountName `
    -Location $location `
    -SkuName "Standard_LRS" `
    -Kind "StorageV2"

# Output the storage account details
$storageAccount | Format-List