<template>
    <div>
        <h1>Welcome!!!</h1>
        <button @click="getApi">
            get api
        </button>
        <br>
        <button @click="getAuth">
            get auth
        </button>
        <hr>
        <pre v-show="result">
            {{ result }}
        </pre>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

const getData = async (url: string) => {
    try {
       const response = await axios.get(url);
       return response.data; 
    } catch (error) {
        console.log(error);
    }
}

const result = ref<object>();



const getApi = async (): Promise<void> => {
    console.log('getApi');
    result.value = await getData('/api/articles');
};

const getAuth = async (): Promise<void> => {
    console.log('getAuth');
    result.value = await getData('/auth/with-api-data');
}

</script>