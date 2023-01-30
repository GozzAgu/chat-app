<template>
    <div id="messages" class="ml-[420px] w-full">
        <div class="w-full">
            <div class="border-l border-green-500 w-full">
                <div class="fixed z-10 bg-[#F0F0F0] min- w-[calcl(100vw-420px)] flex justify-between items-center py-2 px-2">
                    <div class="flex items-center">
                        <img src="../assets/dell-SGY0LIfTKZ4-unsplash.jpg" class="rounded-full mx-1 w-10" />
                        <div class="font-semibold ml-1 text-gray-900">
                            Goziee
                        </div>
                    </div>
                    
                    <DotsVerticalIcon fillColor="#515151"/>
                </div>
            </div>

            <div id="MessagesSection" class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-[calc(100vh-420px)] overflow-auto fixed touch-auto">
                <div class="px-20 text-sm">
                    <div class="flex w-[calc(100%-50px)]">
                        <div class="inline-block p-2 bg-white rounded-md my-1">
                            Hi, I am Chief Hi, I am Chief Hi, I am Chief Hi, I am Chief Hi, I am Chief
                        </div>
                    </div>

                    <div class="float-right justify-end space-x-1 w-[calc(100%-50px)]">
                        <div class="inline-block p-2 bg-white rounded-md my-1">
                            Hi, I am Chief Hi, I am Chief Hi, I am Chief Hi, I am Chief Hi, I am Chief
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-2.5 z-10 fixed bottom-0 w-[calc(100vw-420px)] bg-[#F0F0F0]">
                <div class="flex items-center justify-center">
                    <EmoticonExcitedIcon/>
                    <PaperclipIcon :size="27" class="mr-3 mx-1.5"/>
                    <input 
                    class="
                        mr-1 
                        shadow 
                        w-full  
                        py-3
                        px-4
                        text-gray-700 
                        leading-tight 
                        focus:outline-none
                        focus:shadow-outline"
                    autocomplete="off"
                    placeholder="Message...." 
                    type="text" />
                    <button class="ml-3 p-2 w-12 items-center justify-center flex">
                        <SendIcon fillColor="#515151"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
import EmoticonExcitedIcon from 'vue-material-design-icons/Emoticon.vue'
import PaperclipIcon from 'vue-material-design-icons/Paperclip.vue'
import SendIcon from 'vue-material-design-icons/Send.vue'
</script>