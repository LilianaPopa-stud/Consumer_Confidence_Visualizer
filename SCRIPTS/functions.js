function generateYearOptions() {
    const startYear = 1963;
    const currentYear = new Date().getFullYear()-3;
    const select = document.getElementById("start-year");
    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement("option");
        option.value = year.toString();
        option.textContent = year.toString();
        select.appendChild(option);
    }

}
function generateEndYearOptions() {
    const endYear = 1963;
    const currentYear = new Date().getFullYear();
    const select = document.getElementById("end-year");
    for (let year = currentYear; year >= endYear; year--) {
        const option = document.createElement("option");
        option.value = year.toString();
        option.textContent = year.toString();
        select.appendChild(option);

    }
}