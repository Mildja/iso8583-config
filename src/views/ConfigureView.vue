<template>
  <div >
    <br>
    <h3>Configure ISO8583 </h3><br>
    <p>ทำการเปลี่ยนแปลงข้อกำหนด Field ISO8583 ในตาราง บันทึกแต่ละฟิลด์แล้วสร้างใหม่</p>
  </div>

  <div class="q-pa-md">
    <q-option-group v-model="separator" inline class="q-mb-md" :options="[
      { label: 'Horizontal (default)', value: 'horizontal' },
      { label: 'Vertical', value: 'vertical' },
      { label: 'Cell', value: 'cell' },
      { label: 'None', value: 'none' },
    ]" />
    <q-table title="Configure file Iso8583.XML" :rows="rows" :columns="columns"
      no-data-lable="Can't find anything for you hihi" row-key="name" :separator="separator" />
  </div>
</template>


<script>
import { ref } from 'vue'
import ISO8583 from '../service/iso8583config'

const columns = [
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Namefield', align: 'center', label: 'Name field', field: 'namefield'},
  { name: 'dataElement', label: 'Data element', field: 'dataElement', sortable: true },
  { name: 'lenght', label: 'Lenght', field: 'lenght' },
  { name: 'maxlenght', label: 'Max lenght', field: 'maxlenght' },
  { name: 'chack', label: 'Chack Massage', field: 'chack' },
  { name: 'description', label: 'Description', field: 'description', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'type', label: 'Type', field: 'type', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'type', label: 'Type', field: 'type', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]


const rows = ref([])

export default {
  setup() {
    return {
      separator: ref('vertical'),
      columns,
      rows
    }
  },
  methods:{
    get(){
      ISO8583.get().then((res)=> {
        this.rows = res.data;
        console.log(this.rows);
      });
    },
  },
  created(){
    this.get()
  }
}
</script>
