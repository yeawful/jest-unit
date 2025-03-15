// Напишите функцию, которая принимает имена двух файлов и вызывает функцию, переданную третьим параметром и передает ей первым агрументом сумму их размеров.

// Для получения рамзера файла необходимо использовать функцию `getFileSize(filename, cb)`.

let fileSizes: Record<string, number> = {
    testFile1: 65,
    testFile2: 48,
};

function getFileSize(filename: string, cb: (size: number) => void) {
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1: string, filename2: string, cb: (totalSize: number) => void) {
    getFileSize(filename1, (file1Size) => {
        getFileSize(filename2, (file2Size) => {
            cb(file1Size + file2Size);
        });
    });
}

export default sumFileSizes;