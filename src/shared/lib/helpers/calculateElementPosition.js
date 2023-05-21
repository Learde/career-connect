import { createPopper } from "@popperjs/core";

export const calculateElementPosition = (
    dropdownList,
    component,
    { width }
) => {
    dropdownList.style.width = width;
    const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: "bottom",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, -1],
                },
            },
        ],
    });

    return () => popper.destroy();
};
