document.querySelector('form').onsubmit = function (e) {

    e.preventDefault()

    const nome = document.getElementById('nome').value;
    if (nome.length < 3) {
        return alert('Insira um nome ou apelido com ao menos 3 caracteres!')
    }

    const profissao = document.getElementById('profissao').value;
    if (profissao.length < 3) {

        return alert('Preencha sua profissão!')
    }


    const podcastsdepressao = this.podcastsdepressao.value;
    const podcastsansiedade = this.podcastsansiedade.value;
    const videodepressao = this.videodepressao.value;
    const videoansiedade = this.videoansiedade.value;
    let avatar;

    if (this.avatar1.checked)
        avatar = this.avatar1.value;
    if (this.avatar2.checked)
        avatar = this.avatar2.value;
    if (this.avatar3checked)
        avatar = this.avatar3.value;
    if (this.avatar4.checked)
        avatar = this.avatar4.value;
    if (this.avatar5.checked)
        avatar = this.avatar5.value;
    if (this.avatar6.checked)
        avatar = this.avatar6.value;
    if (this.avatar7.checked)
        avatar = this.avatar7.value;
    if (this.avatar8.checked)
        avatar = this.avatar8.value;


    if (podcastsdepressao) {

        const professionalsDataDepressionPodcasts = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.podcastsdepressao.value,
                avatar: avatar,
            }
        ]
        window.localStorage.setItem('depression_podcasts', JSON.stringify(professionalsDataDepressionPodcasts));
        window.location.href = '../index.html'
    }
    if (podcastsansiedade) {
        const professionalsDataAnxiousPodcasts = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.podcastsansiedade.value,
                avatar: avatar,
            }
        ]
        window.localStorage.setItem('anxious_podcasts', JSON.stringify(professionalsDataAnxiousPodcasts));
        window.location.href = '../index.html'
    }
    if (videodepressao) {
        const professionalsDataDepressionVideos = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.videodepressao.value,
                avatar: avatar,
            }
        ]

        window.localStorage.setItem('depression_videos', JSON.stringify(professionalsDataDepressionVideos));
        window.location.href = '../index.html'
    }
    if (videoansiedade) {
        const professionalsDataAnxiousVideos = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.videoansiedade.value,
                avatar: avatar,
            }
        ]
        window.localStorage.setItem('anxious_videos', JSON.stringify(professionalsDataAnxiousVideos));
        window.location.href = '../index.html'
    }
}


function sair() {
    window.location.href = "../index.html"
}
