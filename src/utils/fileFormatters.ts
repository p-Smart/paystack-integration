

export const filesToBlobURLs = (files: FileList): Promise<string[]> => {
    return Promise.all(
      Array.from(files).map(file => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result instanceof ArrayBuffer) {
              const blob = new Blob([reader.result], { type: file.type });
              const blobURL = URL.createObjectURL(blob);
              resolve(blobURL);
            } else {
              reject(new Error('Failed to read file as blob URL'));
            }
          };
          reader.onerror = () => {
            reject(reader.error || new Error('Unknown error while reading file'));
          };
          reader.readAsArrayBuffer(file);
        });
      })
    );
};


export const fileToBlobUrl = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result instanceof ArrayBuffer) {
            const blob = new Blob([reader.result], { type: file.type });
            const blobURL = URL.createObjectURL(blob);
            resolve(blobURL);
          } else {
            reject(new Error('Failed to read file as blob URL'));
          }
        };
        reader.onerror = () => {
          reject(reader.error || new Error('Unknown error while reading file'));
        };
        reader.readAsArrayBuffer(file);
      });
}