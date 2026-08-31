/**
 * Hub-owned media generation catalog (image / video / audio).
 * Migrated from omnimux-workflow IMAGE/VIDEO/AUDIO_MODEL_SPECS.
 * Chat-directory ownership stays in src/text/catalog.js + cordis.patch.yml.
 */

const RATIO_OPTS = {
  auto: { value: 'auto', label: '自适应' },
  r1_1: { value: '1:1', label: '1:1' },
  r16_9: { value: '16:9', label: '16:9' },
  r9_16: { value: '9:16', label: '9:16' },
  r4_3: { value: '4:3', label: '4:3' },
  r3_4: { value: '3:4', label: '3:4' },
  r21_9: { value: '21:9', label: '21:9' },
  r3_2: { value: '3:2', label: '3:2' },
  r2_3: { value: '2:3', label: '2:3' },
  r9_21: { value: '9:21', label: '9:21' },
};

const STANDARD_IMAGE_MIMES = ['image/png', 'image/jpeg', 'image/webp'];
const STANDARD_VIDEO_MIMES = ['video/mp4', 'video/quicktime', 'video/webm'];
const STANDARD_AUDIO_MIMES = ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/webm'];

export const IMAGE_MODEL_SPECS = [
  {
    id: 'gpt-image-2',
    label: 'GPT Image 2',
    badge: '默认',
    subtitle: '1k-4k',
    family: 'openai',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '1024x1024', label: '1K' }, { value: '1792x1024', label: '2K' }],
        defaultValue: '1792x1024',
      },
      quality: {
        options: [{ value: 'standard', label: '标准' }, { value: 'hd', label: '高清 HD' }],
        defaultValue: 'standard',
      },
    },
  },
  {
    id: 'gpt-image2-hd',
    label: 'GPT Image 2 HD',
    subtitle: '高清 4K',
    family: 'openai',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '1792x1024', label: '2K' }, { value: '3840x2160', label: '4K' }],
        defaultValue: '1792x1024',
      },
    },
  },
  {
    id: 'grok-imagine-image',
    label: 'Grok Imagine Image',
    badge: '极速',
    subtitle: 'xAI Grok',
    family: 'grok',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 4, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'grok-imagine-image-quality',
    label: 'Grok Imagine Image Quality',
    badge: '高画质',
    subtitle: 'xAI Grok HD',
    family: 'grok',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 4, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '2K', label: '2K' }, { value: '4K', label: '4K' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'midjourney',
    label: 'Midjourney',
    badge: '旗舰',
    subtitle: 'Midjourney v7/v8',
    family: 'midjourney',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 5, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '2K', label: '2K' }, { value: '1080P', label: '1080P' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'midjourney-8.1',
    label: 'Midjourney 8.1',
    badge: 'Yearly -20%',
    subtitle: '2K',
    family: 'midjourney',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 5, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
          RATIO_OPTS.r9_21,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '2K', label: '2K' }, { value: '1080P', label: '1080P' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'midjourney-7',
    label: 'Midjourney 7',
    subtitle: '1080P',
    family: 'midjourney',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 5, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'midjourney-niji-7',
    label: 'Midjourney Niji 7',
    subtitle: '二次元动漫',
    family: 'midjourney',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 5, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'nanobanana-2',
    label: 'NanoBanana 2',
    badge: 'Imagen',
    subtitle: 'auto-4K',
    family: 'nanobanana',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 4, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: 'auto-4K', label: 'auto-4K' }, { value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
        defaultValue: 'auto-4K',
      },
    },
  },
  {
    id: 'nano_banana_2',
    label: 'Nano Banana 2',
    subtitle: 'Google Imagen',
    family: 'nanobanana',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 4, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: 'auto-4K', label: 'auto-4K' }, { value: '2K', label: '2K' }],
        defaultValue: 'auto-4K',
      },
    },
  },
  {
    id: 'nanobanana-pro',
    label: 'NanoBanana Pro',
    subtitle: 'auto-4K Pro',
    family: 'nanobanana',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 4, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: 'auto-4K', label: 'auto-4K' }, { value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
        defaultValue: 'auto-4K',
      },
    },
  },
  {
    id: 'nano_banana_pro',
    label: 'Nano Banana Pro',
    subtitle: 'Google Imagen Pro',
    family: 'nanobanana',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 4, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: 'auto-4K', label: 'auto-4K' }, { value: '2K', label: '2K' }],
        defaultValue: 'auto-4K',
      },
    },
  },
  {
    id: 'seedream-5.0-pro',
    label: 'Seedream 5.0 Pro',
    subtitle: '1K-2K',
    family: 'seedream',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 8, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'seedream-4.5',
    label: 'Seedream 4.5',
    subtitle: '2K-4K',
    family: 'seedream',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 8, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '4K', label: '4K' }, { value: '2K', label: '2K' }],
        defaultValue: '2K',
      },
    },
  },
];

export const VIDEO_MODEL_SPECS = [
  {
    id: 'seedance-2-0-fast',
    label: 'Seedance 2.0 Fast',
    badge: '默认',
    subtitle: '720P · ⏱ 4-8s',
    family: 'bytedance',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference', 'first_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 4, label: '4s' },
          { value: 6, label: '6s' },
          { value: 8, label: '8s' },
        ],
        defaultValue: 4,
        unit: 's',
      },
      resolution: {
        options: [{ value: '720P', label: '720P' }, { value: '1080P', label: '1080P' }],
        defaultValue: '720P',
      },
    },
  },
  {
    id: 'seedance-2-5',
    label: 'Seedance 2.5',
    badge: '即梦旗舰',
    subtitle: '720P-1080P · ⏱ 5-10s',
    family: 'bytedance',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference', 'first_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '720P', label: '720P' }, { value: '1080P', label: '1080P' }],
        defaultValue: '720P',
      },
    },
  },
  {
    id: 'seedance-2-0',
    label: 'Seedance 2.0',
    subtitle: '720P · ⏱ 5s',
    family: 'bytedance',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference', 'first_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [{ value: 5, label: '5s' }],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '720P', label: '720P' }],
        defaultValue: '720P',
      },
    },
  },
  {
    id: 'seedance2.5-stable-max-720p',
    label: 'Seedance 2.5 Stable Max',
    badge: '高画质稳定',
    subtitle: '720P · ⏱ 5-10s',
    family: 'bytedance',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference', 'first_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      duration: {
        options: [{ value: 5, label: '5s' }, { value: 10, label: '10s' }],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '720P', label: '720P' }],
        defaultValue: '720P',
      },
    },
  },
  {
    id: 'kling-v3',
    label: 'Kling V3',
    badge: '可灵 3.0',
    subtitle: '1080P-4K · ⏱ 5-10s · 🔊',
    family: 'kling',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 2, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['first_frame', 'last_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '4K', label: '4K' }],
        defaultValue: '1080P',
      },
      sound: {
        supported: true,
        defaultValue: true,
      },
    },
  },
  {
    id: 'kling-v2-6',
    label: 'Kling V2.6',
    subtitle: '1080P · ⏱ 5-10s',
    family: 'kling',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 2, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['first_frame', 'last_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'kling-v3-motion-control',
    label: 'Kling V3 运镜控制',
    badge: '运镜控制',
    subtitle: '1080P · 运镜轨迹',
    family: 'kling',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 2, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['first_frame', 'last_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'kling-avatar',
    label: 'Kling Avatar (数字人)',
    badge: '数字人',
    subtitle: '音频对口型',
    family: 'kling',
    inputCapability: {
      modalities: ['text', 'image', 'audio'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
      referenceAudios: { min: 0, max: 1, allowedMimeTypes: STANDARD_AUDIO_MIMES, supportedRoles: ['audio_track'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
    },
  },
  {
    id: 'kling-o1',
    label: 'Kling O1',
    subtitle: '1080P · ⏱ 3-10s',
    family: 'kling',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 2, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['first_frame', 'last_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'kling-o3',
    label: 'Kling O3',
    subtitle: '4K · ⏱ 3-15s · 🔊',
    family: 'kling',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 2, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['first_frame', 'last_frame'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
          { value: 15, label: '15s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '4K', label: '4K' }],
        defaultValue: '1080P',
      },
      sound: {
        supported: true,
        defaultValue: true,
      },
    },
  },
  {
    id: 'veo-3.1',
    label: 'Veo 3.1',
    badge: '谷歌顶级',
    subtitle: '720p-1080p · ⏱ 8s',
    family: 'veo',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 8, label: '8s' },
        ],
        defaultValue: 8,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'veo-3.1-fast',
    label: 'Veo 3.1 Fast',
    badge: '极速',
    subtitle: '720p-1080p · ⏱ 8s',
    family: 'veo',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 8, label: '8s' },
        ],
        defaultValue: 8,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'grok-imagine-video',
    label: 'Grok Imagine Video',
    badge: 'xAI Grok',
    subtitle: '720P · ⏱ 5s',
    family: 'grok',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [{ value: 5, label: '5s' }],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '720P', label: '720P' }],
        defaultValue: '720P',
      },
    },
  },
  {
    id: 'grok-imagine-video-1.5',
    label: 'Grok Imagine Video 1.5',
    subtitle: '720P-1080P · ⏱ 5s',
    family: 'grok',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [{ value: 5, label: '5s' }],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'omni_flash',
    label: 'Omni Flash Video',
    subtitle: '多时长视频',
    family: 'veo',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 4, label: '4s' },
          { value: 6, label: '6s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 6,
        unit: 's',
      },
      resolution: {
        options: [{ value: '720P', label: '720P' }],
        defaultValue: '720P',
      },
    },
  },
  {
    id: 'wan-3.0',
    label: 'Wan 3.0',
    subtitle: '720P-1080P · ⏱ 5-15s · 🔊',
    family: 'wan',
    inputCapability: {
      modalities: ['text', 'image'],
      referenceImages: { min: 0, max: 1, allowedMimeTypes: STANDARD_IMAGE_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
          { value: 15, label: '15s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
      sound: {
        supported: true,
        defaultValue: false,
      },
    },
  },
];

export const AUDIO_MODEL_SPECS = [
  {
    id: 'suno',
    label: 'Suno Music',
    badge: '音乐创作',
    subtitle: 'AI 歌曲 / 纯音乐 · ⏱ 30-120s',
    family: 'suno',
    inputCapability: {
      modalities: ['text'],
    },
    parameters: {
      duration: {
        options: [
          { value: 30, label: '30s' },
          { value: 60, label: '60s' },
          { value: 120, label: '120s' },
        ],
        defaultValue: 60,
        unit: 's',
      },
      instrumental: {
        supported: true,
        defaultValue: false,
      },
    },
  },
  {
    id: 'gpt-4o-mini-tts',
    label: 'GPT 4o Mini TTS',
    badge: '语音合成',
    subtitle: 'OpenAI 高清配音 · 6 种音色',
    family: 'openai',
    inputCapability: {
      modalities: ['text'],
    },
    parameters: {
      voice: {
        options: [
          { value: 'alloy', label: 'Alloy (自然通用)' },
          { value: 'echo', label: 'Echo (沉稳男声)' },
          { value: 'fable', label: 'Fable (英式叙事)' },
          { value: 'onyx', label: 'Onyx (深沉厚重)' },
          { value: 'nova', label: 'Nova (明亮女声)' },
          { value: 'shimmer', label: 'Shimmer (清亮柔和)' },
        ],
        defaultValue: 'alloy',
      },
    },
  },
  {
    id: 'whisper-1',
    label: 'Whisper 1',
    badge: '语音识别',
    subtitle: 'OpenAI 语音转文字 / ASR',
    family: 'openai',
    inputCapability: {
      modalities: ['audio'],
      referenceAudios: { min: 1, max: 1, allowedMimeTypes: STANDARD_AUDIO_MIMES, supportedRoles: ['reference'] },
    },
    parameters: {},
  },
];

const TABLES = Object.freeze({
  image: IMAGE_MODEL_SPECS,
  video: VIDEO_MODEL_SPECS,
  audio: AUDIO_MODEL_SPECS,
})

/**
 * @param {'image' | 'video' | 'audio'} kind
 * @returns {ReadonlyArray<{ id: string, label: string, badge?: string, subtitle?: string, family?: string, inputCapability?: object, parameters?: object }>}
 */
export function mediaModels(kind) {
  return TABLES[kind] ?? []
}

/** @param {'image' | 'video' | 'audio'} kind */
export function mediaModelIds(kind) {
  return mediaModels(kind).map((row) => row.id)
}

/** @param {'image' | 'video' | 'audio'} kind @param {string} id */
export function findMediaModel(kind, id) {
  if (!id || typeof id !== 'string') return null
  const models = mediaModels(kind)
  const match = models.find((row) => row.id === id)
  if (match) return match
  const stripped = id.replace(/[-_.]/g, '').toLowerCase()
  return models.find((row) => row.id.replace(/[-_.]/g, '').toLowerCase() === stripped) ?? null
}
