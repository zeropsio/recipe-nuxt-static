<template>
    <div class="code-block">
        <pre ref="code" lang="yaml"><code lang="yaml">{{ code }}</code></pre>
        <button ref="copyButton" @click="copyCode">Copy</button>
    </div>
</template>

<script>
export default {
    props: {
        code: {
            type: String,
            required: true
        }
    },
    methods: {
        copyCode() {
            const codeElement = this.$refs.code;
            const range = document.createRange();
            range.selectNodeContents(codeElement);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();

            const copyButton = this.$refs.copyButton;
            const originalText = copyButton.innerText;
            copyButton.innerText = 'Copied!';

            setTimeout(() => {
                copyButton.innerText = originalText;
            }, 2000);
        }
    }
}
</script>

<style scoped>
.code-block {
    position: relative;
    text-align: start;
    border-radius: 4px;
    padding: 16px;
    color: #CBDAF5;
    background: #171F2D;
    @apply max-w-sm lg:min-w-[500px];
}

pre {
    text-align: start;
    overflow: scroll;
    box-sizing: content-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

pre::-webkit-scrollbar {
    display: none;
}

button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}
</style>
