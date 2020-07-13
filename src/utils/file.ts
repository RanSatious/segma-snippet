function downloadBlob(content: Blob, name: string): void;
function downloadBlob(array: ArrayBuffer, name: string, mime: string): void;
function downloadBlob(content: Blob | ArrayBuffer, name: string, mime?: string): void {
    let url: string;
    if (content instanceof ArrayBuffer) {
        url = URL.createObjectURL(new Blob([content], mime ? { type: mime } : undefined));
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
