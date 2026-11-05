# AIB site

Marketing home for the AIB product family: [aib.smnl.dev](https://aib.smnl.dev).

| Path      | Product                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------- |
| `/`       | Hub                                                                                               |
| `/camera` | [AIB Camera](https://aib.smnl.dev/camera)                                                         |
| `/sitac`  | [AIB SITAC](https://aib.smnl.dev/sitac) · app at [sitac.aib.smnl.dev](https://sitac.aib.smnl.dev) |

Independent, unofficial tools. Not affiliated with Protezione Civile, Vigili del Fuoco, or other institutions.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/base-ui · Prettier

## Commands

```bash
npm ci
npm run dev
npm run build
npm run format
npm run typecheck
npm run docs:camera-guide
npm run docs:camera-changelog
```

Camera guide/changelog markdown lives in `content/camera/`. Regenerated HTML bodies go to `content/camera/bodies/`; PDFs to `public/docs/`.

## License

[PolyForm Noncommercial 1.0.0](./LICENSE) for project source. Name, icons, and brand assets are not licensed for reuse in other products.
