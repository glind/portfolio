#!/bin/bash
echo "Building Tailwind CSS..."
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/custom.css --minify
echo "CSS build complete!"
