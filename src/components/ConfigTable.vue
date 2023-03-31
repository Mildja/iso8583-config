<template>
    <div class="config">
        <h1>Configure ISO8583 Massage</h1>
        <p>ทำการเปลี่ยนแปลงข้อกำหนด Field ISO8583 ในตาราง บันทึกแต่ละฟิลด์แล้วสร้างใหม่</p>
    </div>

    <div>
        <table class="table caption-top">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'ConfigTable',
    data() {
        return {
            items: [
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
                { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' }
            ]
        }
    }
}
</script>

<style></style>