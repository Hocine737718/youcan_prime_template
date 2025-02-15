// uno.config.ts
import { defineConfig, presetAttributify, presetIcons } from 'unocss';
import YouCanIconsInfo from '@youcan/ui-icons/info.json';
import YouCanIcons from '@youcan/ui-icons/icons.json';

export default defineConfig({
    presets: [
        presetAttributify(),
        presetIcons({
            warn: true,
            extraProperties: {
                width: '20px',
                height: '20px',
                display: 'block',
            },
            collections: {
                [YouCanIconsInfo.prefix || 'youcan']: () => YouCanIcons,
            },
        }),
    ],
    safelist: [
        ...Object.keys(YouCanIcons.icons).map(key => `i-${YouCanIcons.prefix}:${key}`),
    ],
});