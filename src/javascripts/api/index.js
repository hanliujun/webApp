const api = {
    request({
        url, data, methods
    }){
        return  $.ajax({
            url: '/api'+url,
            data: data || '',
            methods: methods || 'get',
            success: (res) =>{
                return res
            },
            error: () =>{
                return '请求错误'
            }
        })
    }
}

module.exports = api