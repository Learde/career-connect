import { directive } from "vue-tippy";

import { isObject } from "../helpers";
export const vTooltip = {
    mounted(el, binding, vnode) {
        const options = !isObject(binding.value)
            ? { content: binding.value }
            : binding.value;

        // set defaults to directive
        options.theme = options.theme ?? "dark";
        options.arrow = options.arrow ?? true;
        options.delay = options.delay ?? [200, 100];

        binding.value = options;

        directive.mounted(el, binding, vnode);
    },

    unmounted: directive.unmounted,
    updated: directive.updated,
};
