# 구성
웹페이지와 api 서버로 이루어져 있음
# 구조
웹페이지의 경우 빌드된 static 파일의 nginx 를 통해 제공함
api 의 경우 nginx reverse proxy - gunicorn - flask 를 통해 제공됨

# 빌드
## 개발 run dev
환경 격리와 실시간 업데이트를 동시에 사용하기 위해 docker 내부에서 `npm run dev` 후 로컬 src 를 컨테이너에 마운팅하도록 함.
- 빌드/실행:
```bash
# -d: detached; 백그라운드에서 실행
# --build: 이미지가 존재해도 빌드 후 실행 
docker-compose -d -f compose.run_dev.yml up --build
```

## 테스트 dev
배포 환경을 로컬에서 테스트하기 위한 빌드. 모든 구성 요소는 배포한 상태와 같이 작동하는 중에 localhost 를 통해 접근하기 위함
- 빌드/실행:  
```bash
# -d: detached; 백그라운드에서 실행
# --build: 이미지가 존재해도 빌드 후 실행 
docker-compose -d -f compose.dev.yml up --build
```

## 배포 prod
배포에 사용하기 위한 빌드

# 배포