Vue.component('table-component', {
  props: ['tableContent', 'tableStyle',],
  template: `<div>
              <h2>{{ tableContent.tableTitle }}</h2>
                <table :class="tableStyle">
                <tr>
                <th v-for="(title, index) in tableContent.colTitle" :key="title">{{ title }}</th>
              </tr>
              <row-component v-for="(row, index) in tableContent.content" :key="index" :rowContent="row"></row-component>
                </table>
            </div>`
})
