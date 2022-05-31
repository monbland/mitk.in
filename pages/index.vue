<template>
  <main>
    <section>
      <div class="row justify-content-center">
        <div class="col-12" style="height: 30vh" />
        <div class="col-auto align-self-center">
          <div class="card">
            <div class="container">
              <h1 style="color: #ff13a7">mitk.in</h1>
              <h4><b class="highlight">Митькин Андрей</b></h4>
              <p>Fullstack Developer Python (Django) + JavaScript (VueJS)</p>
            </div>
          </div>
        </div>
      </div>
    </section>  
  </main>
</template>

<script>
export default {
  head() {
    // У всех страниц должны быть title и description.
    let title = "Mitk.in";
    let description = "Визитная карточка";

    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "og:title", property: "og:title", content: title },
        { hid: "og:description", property: "og:description", content: description },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 30px;
  max-width: 350px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.highlight {
  position: relative;
  background-size: 1px 1em;
  box-shadow: inset 0 0 #fff, inset 0 -10px #ff13a7;
  display: inline;
}
</style>
