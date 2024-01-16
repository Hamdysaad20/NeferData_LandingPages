#!/bin/bash

# Check that the script contains argument to cldshld folder, else add good instructions
# to verify that the script is used correctly, it should have a yew-ui folder in the cldshld folder
if [ $# -eq 0 ]; then
    echo "Please provide path to cldshld folder"
    exit 1
fi

# Build the website
npm run build

# Move assets folder to parent directory
pushd dist
mv website/assets assets
# Remove website folder
rm -rf website
popd

# Rename dist into website
mv dist website

# delete website folder in cldshld folder
rm -rf $1/yew-ui/website

mv website $1/yew-ui/
