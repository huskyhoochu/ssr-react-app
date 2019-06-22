# Create-react-app with Server-Side rendering

### Summary

create-react-app 을 이용해 서버 사이드 렌더링을 구현한 저장소입니다.

`ssr-server` 를 submodule로 사용해 구동합니다. 이미 설치는 끝나 있습니다.

### How to use

프론트 및 서버 모듈 각각 `yarn` 설치 및 TypeScript 컴파일을 해주셔야 합니다.

```
$ yarn install

(서버 폴더로 이동)
$ cd ssr-server
$ yarn install && yarn build

(루트 디렉터리로 이동)
$ cd ..

(client-side rendering)
$ yarn build && yarn client

(server-side rendering)
$ yarn prod && yarn server 
```

### One more thing...

보안을 위해 `.env` 파일을 생성이 이 옵션을 추가해줍시다.

(create-react-app의 .env 설정값에 대해 더 알고 싶다면: <a href="https://facebook.github.io/create-react-app/docs/advanced-configuration" target="_blank" rel="noopener noreferrer">공식 문서</a>)

```
# .env
GENERATE_SOURCEMAP=false # build 시점에 sourcemap을 만들지 않습니다.
INLINE_RUNTIME_CHUNK=false # 런타임 파일을 index.html에 인라인으로 삽입하지 않고 파일로 제공합니다.
```
