pipeline {
    agent {
        kubernetes {
            defaultContainer 'docker'
            yaml """
  apiVersion: v1
  kind: Pod
  spec:
    containers:
    - name: docker
      image: docker:19.03.1
      resources:
        limits:
          memory: "256Mi"
          cpu: "100m"
      command:
      - sleep
      args:
      - 1d
      volumeMounts:
      - name: dockersock
        mountPath: /var/run/docker.sock
    volumes:
    - name: dockersock
      hostPath:
        path: /var/run/docker.sock
            """
        }
    }

    environment {
        registry = 'twnsndnodejs/frontend'
        registryCredential = 'Dockerhub_Node'
        dockerImage = ''
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'release', credentialsId: 'github_frontend', url: 'git@github.com:Power-Rangers-3/Front-end.git'
            }
        }    
        stage('build') {
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
        }
        stage('Deploy image') {
            steps {
                script{
                    docker.withRegistry('', registryCredential ) {
                        dockerImage.push("$BUILD_NUMBER")
                         dockerImage.push('latest')
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}   