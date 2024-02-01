<script setup>
import tabs from '@/components/tabs/index.vue'
import useStore from '@/store'
import {storeToRefs} from 'pinia'
import router from "@/router/index.js";

const {movieStore} = useStore()
const {movieList} = storeToRefs(movieStore)

movieStore.setMovieList()

const onPush = (id) => {
  router.push({name: 'detail', query: {id}})
}
</script>

<template>
  <v-container class="h-screen pt-16">
    <tabs/>
    <v-list lines="two" class="mt-4 bg-transparent">
      <v-list-item class="px-0" v-for="movie in movieList" :key="movie.id"
                   @click="onPush(movie.id)">
        <v-card class="rounded-lg">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-img width="35%" cover :src="movie.img"></v-img>
            <div class="w-100" @click="$router.push('/detail')">
              <v-card-title class="text-h5">
                {{ movie.cnName }}
              </v-card-title>
              <v-card-subtitle>{{ movie.type }}</v-card-subtitle>
              <v-card-subtitle class="font-weight-black">
                <v-container class="px-0">
                  <v-row>
                    <v-col class="text-h4 pr-0" cols="4">
                      <p style="color: #565399">{{ movie.rating }}</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="px-0">
                      <v-col class="py-0 text-truncate" style="max-width: 90%;">
                        导演:{{ movie.director }}
                      </v-col>
                      <v-col class="py-0 text-truncate" style="max-width: 70%;">
                        主演:{{ movie.actors }}
                      </v-col>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<style scoped></style>
