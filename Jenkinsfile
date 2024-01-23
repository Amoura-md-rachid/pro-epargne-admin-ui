node("ci-node"){

    stage("checkout"){
        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mchekini-check-consulting/pro-epargne-admin-ui.git']])
    }

    stage("build"){
       sh "npm install"
       sh "npm run build --prod"
    }

    stage("build image"){
            sh "sudo docker build -t pro-epargne-admin-ui ."
    }

    stage("push image"){
        withCredentials([usernamePassword(credentialsId: 'mchekini', usernameVariable: 'username',
            passwordVariable: 'password')]) {
            sh "sudo docker login -u $username -p $password"
            sh "sudo docker tag pro-epargne-admin-ui $username/pro-epargne-admin-ui:1.0"
            sh "sudo docker push $username/pro-epargne-admin-ui:1.0"
            sh "sudo docker rmi $username/pro-epargne-admin-ui:1.0"
            sh "sudo docker rmi pro-epargne-admin-ui"
            stash includes: 'docker-compose.yml', name: 'utils'
        }
    }


    stage("deploy"){
        node("deploy-node"){
            unstash 'utils'
            try {
                sh "sudo docker-compose down"
                sh "sudo docker-compose pull"
                sh "sudo docker-compose up -d"

            } catch (Exception e) {
                println "No Docker Containers Running"
                sh "sudo docker-compose pull"
                sh "sudo docker-compose up -d"
            }
        }
    }


}
