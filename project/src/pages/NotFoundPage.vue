<template>
    <div class="center notFound">
        <div class="text-box">
            <h1 class="title">404</h1>
            <p class="text">
                We are sorry, but the page you requested was not found
            </p>
            <router-link to="/" class="btn font-jost">Back To Home <svg width="18" height="17" viewBox="0 0 18 17"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                        stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
        <div class="img-box">
            <img src="@/assets/img/notfound.jpg" alt="#" class="img" />
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.btn {
    margin-top: 23px;
    padding: 26px 54px;
    border-radius: 18px;
    background-color: #292F36;
    font-size: 18px;
    text-align: center;
    line-height: 22.5px;
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & svg {
        padding-left: 9px;
    }
}

.notFound {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-box {
    align-self: center;
}

.title {
    color: rgb(205, 162, 116);
    font-size: 250px;
    font-weight: 400;
    line-height: 125%;
}

.text {
    width: 560px;
    color: rgb(41, 47, 54);
    font-size: 35px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}

.img {
    max-width: 47.552vw;
    max-height: 88.23vh;
    //   overflow: hidden;
}
</style>