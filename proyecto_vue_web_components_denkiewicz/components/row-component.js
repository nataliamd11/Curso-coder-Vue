Vue.component('row-component', {
  props: ['rowContent'],
  computed: {

  },
  template: ` 
          <tr>
            <td v-for="(cellItem, index) in rowContent" :key="index">{{ cellItem }}</td>
          </tr>`
})
