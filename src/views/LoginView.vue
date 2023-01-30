<template>
  <div class="w-full">
    <div class="w-full bg-teal-600 z-[-1] h-[225px] fixed top-0">
        
    </div>

    <div class="w-full bg-[#191919] z-[-1] h-[calc(100vh-225px)] fixed bottom-0">
        
    </div>

    <div class="max-w-xl mx-auto">
        <div class="mt-10 flex items-center w-full">
            ChatBox
        </div>
 
        <div class="bg-white z-10 p-24 m-6 mt-10">
            <div class="text-center text-4xl text-gray-700 font-light pb-10">
                CHAT
            </div>
            <div class="text-center text-4xl text-gray-700 font-light pb-10">
                <GoogleLogin :callback="callback"/>
            </div>
        </div>
    </div> 
  </div>
</template>

<script setup>
const callback = (response) => {
    console.log(response)
}
</script>

<style>

</style>