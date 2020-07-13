function downloadBlob(content: Blob, name: string): number;
function downloadBlob(array: ArrayBuffer, name: string, mime: string): boolean;
function downloadBlob(content: Blob | ArrayBuffer, name: string, mime?: string): any {
    let url: string;
    if (content instanceof ArrayBuffer) {
        url = URL.createObjectURL(new Blob([content], { type: mime }));
    } else {
        url = URL.createObjectURL(content);
    }
    let link = document.createElement('a');

    link.name = name;
    link.style.display = 'none';
    link.href = url;
    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(url);
    link.remove();
}

export { downloadBlob };
