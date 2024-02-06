FROM node:18
RUN node -v 

RUN echo ls

COPY index.js index.js
COPY package.json package.json
COPY start.sh start.sh

# ENTRYPOINT ["sh", "start.sh", "$commandstart"]
CMD ["sh","/start.sh"]
