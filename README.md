# [MCARD] 패스트캠퍼스 강의 디자인시스팀 및 테스트코드

## 프로젝트 소개
### 1. 파운데이션
- 모노레포로 된 React용 UI라이브러리를 만들고 StoryBook으로 해당 라이브러리를 확인 및 테스트코드 작성을 통해 검증하는 프로젝트.
- nextra를 통해 문서화
- ESBUILD로 생성하였고, CJS와 ESM 모두 지원


## 레포지토리 소개
- PACKEGES : 파운데이션 및 UI라이브러리
- SERVICES
  1. UI라이브러리 및 파운데이션을 확인할 StoryBook및 nextra 문서가 작성된 docs 폴더
  2. 웹앱 빌더(진행중) -> 코드를 잘 모르는 사람도 웹페이지를 쉽게 만들게 하는게 목적
              

# 파운데이션
- yarn add @fastcampus/themes를 통해 설치
- 다크 모드를 지원함.


# 구성 컴퍼넌트
![image](https://github.com/suhong99/fast-designFront/assets/120103909/40d95c7d-8a5b-4b75-9d1f-3fd8544f9690)   
headless 패턴 중에 커스텀 훅과 컴파운드 패턴을 사용하여 관심사의 분리하였고 유지보수성 및 재사용성을 향상함

## 파운데이션 테스트 코드
- VITEST를 통한 테스트(ESBUILD와 호완이 잘되고 빠름)
- clean-up등의 반복된 코드는 유틸을 통해 재사용
