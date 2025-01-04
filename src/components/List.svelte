<script lang="ts">
   import type { ListElement, ListProps } from "src/components/List.types"

   let elements: ListElement[] = []
   export let props: ListProps
   const { title } = props

   function handleAddListElemnt(name: string, id: string) {
      elements.push({
         name,
         id,
      })

      console.log("DBG:", { elements })
      elements = elements
   }
</script>

<main>
   <h2>{title}</h2>
   {#each elements as { id, name }}
      <div>
         <span>{`${id}-`}</span>
         <span>{name}</span>
      </div>
   {/each}
   <button on:click={() => handleAddListElemnt("Blue", String(elements.length + 1))}>Add blue</button>
   <button on:click={() => handleAddListElemnt("Red", String(elements.length + 1))}>Add red</button>
</main>
