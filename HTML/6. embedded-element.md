# 임베디드 요소

> [1. img](#1-img)
>
> [2. 웹에서 사용하는 이미지 유형](#2-웹에서-사용하는-이미지-유형)
>
> [3. video](#3-video)
>
> [4. audio](#4-audio)
>
> [5. canvas, iframe](#5-canvas-iframe)

<br><hr>

## 1. img

- HTML `<img>` 요소는 문서에 이미지를 넣습니다.
  - src 특성 : 필수이며, 포함하고자 하는 이미지로의 경로를 지정합니다.
  - alt 특성 : 이미지의 텍스트 설명이며 필수는 아니지만, 스크린 리더가 alt의 값을 읽어 사용자에게 이미지를 설명하므로, 접근성 차원에서 매우 유용합니다. 또한 네트워크 오류, 콘텐츠 차단, 죽은 링크 등 이미지를 표시할 수 없는 경우에도 이 속성의 값을 대신 보여줍니다.
  - srcset 특성 : 사용자 에이전트가 사용할 수 있는 이미지 소스의 후보. 반응형을 위해 쓰입니다. 쉼표로 구분하는 한 개 이상의 문자열 목록입니다. 각각의 문자열은 다음 구성요소로 이루어집니다.
    - 이미지의 URL.
    - 선택적으로, 공백과 함께 그 뒤를 잇는...
      - 너비 서술자(양의 정수와 바로 뒤의 'w' 문자). 너비 서술자의 값을 sizes 특성으로 지정한 소스 크기로 나눠서 픽셀 밀도를 구합니다.
      - 픽셀 밀도 서술자(양의 실수와 바로 뒤의 'x' 문자).
    - 서술자를 포함하지 않은 경우 기본값인 1x로 간주합니다.
    - 같은 srcset 특성에 너비와 픽셀 밀도 서술자를 함께 사용하거나, 동일한 서술자를 두 개 이상 사용하는건 유효하지 않습니다.
  - sizes 특성 : 소스 크기를 나타내는, 쉼표로 구분한 하나 이상의 문자열. 각각의 문자열은 다음 구성요소로 이루어집니다.
    - 미디어 조건. 마지막 항목에서는 생략해야 합니다.
      - 소스 크기 값.
      - 미디어 조건은 이미지의 속성이 아니라 뷰포트 속성을 가리킵니다. 예를 들어, (max-height: 500px) 1000px은 1000px 너비의 소스를 사용하려면 뷰포트가 500px 이하여야 한다는 뜻입니다.
  - height, width 특성 : 픽셀 단위의 이미지의 고유 크기, 너비. 단위 없는 정수여야 합니다.

예시

```
<img class="fit-picture"
     src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices">

<img src="clock-demo-200px.png"
     alt="Clock"
     srcset="https://yari-demos.prod.mdn.mozit.cloud/ko/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
             https://yari-demos.prod.mdn.mozit.cloud/ko/docs/Web/HTML/Element/img/clock-demo-400px.png 400w"
     sizes="(min-width: 600px) 200px, 50vw">
```

<img class="fit-picture"
     src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices"
     width=100
     height=100
     title="자몽">

<img src="clock-demo-200px.png"
     alt="Clock"
     srcset="https://yari-demos.prod.mdn.mozit.cloud/ko/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
             https://yari-demos.prod.mdn.mozit.cloud/ko/docs/Web/HTML/Element/img/clock-demo-400px.png 400w"
     sizes="(min-width: 600px) 200px, 50vw">

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/img

<br><hr>

## 2. 웹에서 사용하는 이미지 유형

| Abbreviation | MIME type       | File extension(s)                        | Summary                                                                                                                                                         |
| ------------ | --------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JPEG         | `image/jpeg`    | `.jpg`, `.jpeg`, `.jfif`, `pjpeg`, `pjp` | 정지 이미지의 손실 압축에 적합하다.(현재 가장 많이 사용됨)                                                                                                      |
| PNG          | `image/png`     | `.png`                                   | PNG는 원본 이미지를 보다 정확하게 보여주거나 투명도가 필요한 경우 JPEG보다 선호됩니다.                                                                          |
| GIF          | `image/gif`     | `.gif`                                   | 여러장의 이미지로 이루어진 애니메이션 표현 가능                                                                                                                 |
| WEBP         | `image/webp`    | `.webp`                                  | 구글이 만든 이미지 포맷 품질. 품질, 압축률 등이 훨씬 우수하나 지원 브라우저가 제한적이다.                                                                       |
| SVG          | `image/svg+xml` | `.svg`                                   | 다양한 크기로 정확하게 그려야 하는 아이콘, 다이어그램 등에 사용됨. 위 넷과 다르게 래스터(비트맵) 이미지가 아닌 벡터 이미지로 확대한 경우에도 선명하게 나타난다. |

<br><hr>

## 3. video

- HTML `<video>` 요소는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입합니다. 오디오 콘텐츠에도 사용할 수 있으나, `<audio>` 요소가 사용자 경험에 좀 더 적합합니다.
- `<video></video>` 태그 안의 콘텐츠는 브라우저가 `<video>` 요소를 지원하지 않을 때 보여집니다.
  - src 특성 : 삽입(embed)할 동영상의 주소(url)입니다. 이 속성은 선택 사항으로, 비디오 블록 내의 `<source>` (en-US) 요소를 사용하여 삽입할 동영상을 명시할 수도 있습니다.
  - controls 특성 : 이 속성이 존재하면, 소리 조절(volume), 동영상 탐색(seek), 일시 정지(pause)/재시작(resume)을 할 수 있는 컨트롤러를 제공합니다.
  - autoplay 특성 : 부울(boolean) 속성. 이 값이 설정되면, 데이터 로딩이 완료되지 않더라도 재생 가능한 시점에 자동으로 재생이 시작됩니다.
  - muted 특성 : 비디오에 포함되어 있는 오디오의 기본 설정을 나타내는 부울 속성입니다. 설정하면 오디오가 나오지 않습니다. 기본 값은 false이며 이는 비디오가 재생되면 오디오도 같이 재생됨을 의미합니다. autoplay 특성을 사용할 경우 페이지가 로딩되자마자 갑자기 소리가 확 나올 수 있으므로 muted 특성을 이용해 이를 방지할 수 있습니다.
  - loop 특성 : 부울(boolean) 속성, 이 값이 설정되면, 동영상 재생이 마친 후(동영상의 마지막에 도달하면) 자동으로 처음으로 돌아갑니다.
  - poster 특성 : 썸네일같은 기능입니다. 사용자가 동영상을 재생하거나 탐색하기 전까지 출력되는 포스터 프레임 주소입니다. 이 속성이 명시되지 않으면, 첫 번째 프레임이 사용 가능하게 될때까지 아무것도 출력되지 않다가, 가능하게 되면 첫 번째 프레임을 포스터 프레임으로 출력합니다.

예시

```
<video controls width="250">

    <source src="/media/cc0-videos/flower.webm"
            type="video/webm">

    <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>

<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  Sorry, your browser doesn't support embedded videos,
  but don't worry, you can <a href="videofile.ogg">download it</a>
  and watch it with your favorite video player!
</video>
```

<br>

- 출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video

<br><hr>

## 4. audio

- HTML `<audio>` 요소는 문서에 소리 콘텐츠를 포함할 때 사용합니다. src 특성 또는 `<source>` (en-US) 요소를 사용해 한 개 이상의 오디오 소스를 지정할 수 있으며, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 고릅니다. MediaStream (en-US)을 사용하면 미디어 스트림을 바라볼 수도 있습니다.
  - autoplay 특성 : 지정한 경우, 전체 오디오 파일의 다운로드를 기다리지 않고 가능한 빠른 시점에 재생을 시작합니다.
    - 오디오 및 오디오를 가진 비디오를 자동으로 재생하는 사이트는 사용자 경험에 악영향을 끼칠 수 있으므로 피해야 합니다. 반드시 자동 재생을 제공해야 한다면 사용자의 명시적인 동의를 얻어야 하도록 해야 합니다. 그러나, 미디어 소스가 사용자의 선택에 의해 나중에 정해지는 경우라면 자동 재생이 유용할 수 있습니다. 자동 재생 안내서를 방문하고 추가 정보와 적절한 사용법을 알아보세요.

예시

```
<figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg">
  <source src="myAudio.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. Here is
     a <a href="myAudio.mp4">link to the audio</a> instead.</p>
</audio>
```

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/Audio

- <br><hr>

## 5. canvas, iframe

- HTML `<canvas>` 요소는 캔버스 스크립팅 API 또는 WebGL API와 함께 사용해 그래픽과 애니메이션을 그릴 수 있습니다.

예시

```
<canvas id="canvas" width="300" height="300">
  캔버스의 내용을 설명하는 대체 텍스트
</canvas>
<script src="app.js">
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);
</script>
```

- HTML `<iframe>` 요소는 중첩 브라우징 맥락을 나타내는 요소로, 현재 문서 안에 다른 HTML 페이지를 삽입합니다. 지도 등을 삽입할 때 사용합니다.

예시

```
<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>
```

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/iframe
