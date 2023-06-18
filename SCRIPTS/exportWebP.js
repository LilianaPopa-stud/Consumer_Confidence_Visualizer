function get_export_webp() {
    const chartContainer = document.getElementById('myChart');
    const svg = chartContainer.getElementsByTagName('svg')[0];

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const webpData = canvas.toDataURL('image/webp');
        const link = document.createElement('a');
        link.href = webpData;
        link.download = 'chart.webp';
        link.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
}
