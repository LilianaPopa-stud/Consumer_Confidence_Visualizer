
function generateCSVTable_table(table) {
    let csvTable = ""
    const tableString = table.innerText 
    const tableString_array = tableString.split("\n") 
    for (let i = 0;i<tableString_array.length;i++)
        {
            const row_split = tableString_array[i].split("\t")
                for(let index_element = 0; index_element<row_split.length;index_element++)
                {
                    csvTable += `${row_split[index_element]},`
                }
                csvTable = csvTable.slice(0,-1)
    
            csvTable += '\n'
        }
        return csvTable;
    }
    
function generateCSVTable_charts(table) {
        let csvTable = ""
        const tableString = table.innerText 
        const tableString_array = tableString.split("\n") 
        for (let i = 1;i<tableString_array.length;i++)
            {
                const row_split = tableString_array[i].split("\t")
                    for(let index_element = 0; index_element<row_split.length;index_element++)
                    {
                        csvTable += `${row_split[index_element]},`
                    }
                    csvTable = csvTable.slice(0,-1)
        
                csvTable += '\n'
            }
            return csvTable;
        }
        

function downloadCSV(filename, csvStringContent) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStringContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function get_export_csv_table(classId) {
    let table = document.getElementById(classId)
    downloadCSV("export.csv",generateCSVTable_table(table))
}

function get_export_csv_charts(classId) {
    let table = document.getElementById(classId)
    downloadCSV("export.csv",generateCSVTable_charts(table))
}