<template>
  <div class="">
    <h1>Custom rows</h1>
    <b-table
      :data="people"
      striped
    >
      <b-table-column
        field="name"
        label="Name"
        v-slot="props"
      >
        {{ props.row.score > 0 ? '👍' : '😡' }}
        {{ props.row.name }}
      </b-table-column>

      <b-table-column
        field="score"
        label="Score"
        numeric
        v-slot="props"
      >
        {{ props.row.score }}
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
  export default {
    name: 'rows',

    components: {},

    data () {
      return {
        people: [
          {
            name: 'Fred',
            score: 42,
          },
          {
            name: 'Jim',
            score: -17,
          },
          {
            name: 'Sheila',
            score: 12,
          },
        ],
      }
    },
  }
</script>

<style lang="css">
  h1 {
    font-size: 1.6rem;
    font-weight: bold;
  }
</style>
