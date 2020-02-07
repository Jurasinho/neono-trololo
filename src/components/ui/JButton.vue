<template>
    <button class="j-button" v-on="$listeners" v-bind="$attrs" :class="classes">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "JButton",
        props: {
            primary: {type: Boolean, default: false},
            secondary: {type: Boolean, default: false},
            outline: {type: Boolean, default: false},
        },
        computed: {
            classes() {
                let { primary, secondary } = this;
                return { primary, secondary }
            }
        }
    }
</script>
