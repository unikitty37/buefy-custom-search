<template>
  <div class="">
    <h1>Searchable</h1>
    <b-table
      :data="people"
      striped
    >
      <b-table-column
        field="name"
        label="Name"
        searchable
      >
        <template v-slot:searchable="props">
          <b-input
            v-model="props.filters['name']"
            placeholder="Search…"
            icon="magnify"
            size="is-small"
          />
        </template>

        <template v-slot:default="props">
          {{ props.row.score > 0 ? '👍' : '😡' }}
          {{ props.row.name }}
        </template>
      </b-table-column>

      <b-table-column
        field="score"
        label="Score"
        numeric
        v-slot:default="props"
      >
        {{ props.row.score }}
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
  export default {
    name: 'both',

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
