export const documentToBase64 = async (file: File) => {
  const fileSize = file.size * 1.33;
  const maxSize = 20 * 1024 * 1024;
  if (fileSize > maxSize) throw new Error("Document size exceeds 20MB limit.");

  try {
    const base64 = new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject("Document parsed malformed.");
        }
      };

      reader.onerror = () => {
        reject("Document cannot be parsed.");
      };

      reader.readAsDataURL(file);
    });

    return base64;
  } catch (error) {
    console.log(error);
    throw new Error("Document cannot be parsed.");
  }
};
