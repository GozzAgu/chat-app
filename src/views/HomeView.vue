<template>
    <div class="flex">
        <div class="fixed w-[420px] z-10">

            <div class="bg-[#f0f0f0] w-full flex justify-between items-center px-3 py-3">
                <img src="../assets/dell-SGY0LIfTKZ4-unsplash.jpg" class="rounded-full ml-1 w-10" />
                <h1 class="flex items-center justify-center"> Chat </h1>
                <div class="flex items-center justify-center">
                    <AccountGroupIcon fillColor="#515151" class="mr-6"/>
                    <DotsVerticalIcon fillColor="#515151" class="cursor-pointer"/>
                </div>
            </div>

            <div id="Search" class="bg-white w-full px-2 borderb shadown-sm">
                <div class="px-1 m-2 flex items-center bg-[#F0F0F0] justify-center rounded">
                    <MagnifyIcon fillColor="#515151" class="ml-2" :size="18"/>
                    <input 
                    class="
                        ml-5 
                        appearance-none 
                        w-full 
                        bg-[#F0F0F0] 
                        py-1.5
                        px-2.5
                        text-gray-700 
                        leading-tight 
                        focus:outline-none
                        focus:shadow-outline
                        placeholder:text-sm
                        placeholder:text-gray-500"
                    autocomplete="off"
                    placeholder="Chat" 
                    type="text" />
                </div>     
            </div>
        </div>

        <ChatView class="mt-[100px]" />

        <div v-if="open">
            <MessageView/>
        </div>

        <div v-else>
            <div class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center">
                <div class="grid h-screen place-items-center">
                    <div>
                        <div class="w-full flex items-center justify-center">
                            <img src="../assets/dell-SGY0LIfTKZ4-unsplash.jpg" width="375" />
                        </div>
                        <div class="text-[32px] text-gray-500 font-light mt-10">
                            whatsapp web
                        </div>
                        <div class="text-[15px] text-gray-500 mt-2">
                            <div>
                                Send messages
                            </div>
                            <div>
                                Link devices
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChatView from './ChatView.vue'
import MessageView from './MessageView.vue'
import AccountGroupIcon from 'vue-material-design-icons/AccountGroup.vue'
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import { ref } from 'vue'

let open = ref(true)
</script>

<style lang="scss" scoped>

</style>