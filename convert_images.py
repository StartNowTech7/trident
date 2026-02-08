import os
from PIL import Image

def convert_images_to_webp(root_dirs):
    converted_files = []
    errors = []

    for root_dir in root_dirs:
        for subdir, dirs, files in os.walk(root_dir):
            for file in files:
                if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                    file_path = os.path.join(subdir, file)
                    webp_path = os.path.splitext(file_path)[0] + ".webp"
                    
                    try:
                        with Image.open(file_path) as image:
                            image.save(webp_path, "WEBP")
                        converted_files.append((file_path, webp_path))
                        print(f"Converted: {file_path} -> {webp_path}")
                    except Exception as e:
                        errors.append((file_path, str(e)))
                        print(f"Error converting {file_path}: {e}")

    return converted_files, errors

if __name__ == "__main__":
    directories = [
        "public/images",
        "src/assets"
    ]
    
    print("Starting conversion...")
    converted, errs = convert_images_to_webp(directories)
    print(f"\nFinished. Converted {len(converted)} images.")
    if errs:
        print(f"Encountered {len(errs)} errors.")
