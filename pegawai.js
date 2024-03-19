function datapegawai() {
    let nama = document.getElementById('nama').value;
    let jabatan = document.getElementById('jabatan').value;
    let status = document.getElementById('status').value;

    let gajiPokok;

    switch (jabatan) {
        case 'Manager':
            gajiPokok = 15000000;
            break;
        case 'Asisten Manager':
            gajiPokok = 10000000;
            break;
        case 'Staff':
            gajiPokok = 5000000;
            break;
    }

    // Menghitung tunjangan jabatan (15% dari gaji pokok)
    const tunjanganJabatan = 0.15 * gajiPokok;

    // Menghitung BPJS (10% dari gaji pokok)
    const bpjs = 0.1 * gajiPokok;

    // Menghitung tunjangan keluarga (20% dari gaji pokok jika menikah, jika tidak, maka 0)
    const tunjanganKeluarga = (status === "Sudah Menikah") ? 0.2 * gajiPokok : 0;

    // Menghitung total gaji
    const totalGaji = gajiPokok + tunjanganJabatan - bpjs + tunjanganKeluarga;

    // Membuat tabel HTML untuk ditampilkan dalam pop-up
    const table = document.createElement('table');
    table.classList.add('popup-table');

    // Membuat thead
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const headers = ['Nama', 'Jabatan', 'Gaji', 'Tunjangan', 'BPJS'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    // Membuat tbody
    const tbody = table.createTBody();
    const row = tbody.insertRow();
    const data = [nama, jabatan, gajiPokok, tunjanganJabatan, bpjs];
    data.forEach(cellData => {
        const cell = row.insertCell();
        cell.textContent = cellData;
    });

    // Membuat tfoot untuk total gaji
    const tfoot = table.createTFoot();
    const totalRow = tfoot.insertRow();
    const totalHeader = document.createElement('th');
    totalHeader.textContent = 'Total Gaji';
    totalRow.appendChild(totalHeader);
    const totalCell = totalRow.insertCell();
    totalCell.textContent = totalGaji;

    // Menampilkan pop-up menggunakan sweetalert dengan tabel HTML yang telah dibuat
    swal({
        title: "Data Pegawai",
        content: table,
        buttons: {
            ok: true,
        },
    }).then((value) => {
        if (value === "ok") {
            // Handle ketika tombol OK ditekan
            console.log("Tombol OK ditekan.");
        }
    });
}
