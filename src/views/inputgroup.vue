<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h1>Ejemplo Input Group</h1>
            </div>
        </div>

        <div class="container-fluid">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>

            <label for="basic-url" class="form-label">Your vanity URL</label>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-text">.00</span>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Server" aria-label="Server">
            </div>

            <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
    </div>
    <div class="highlight">
        <pre class="chroma">
            <code class="language-html" data-lang="html">
                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group mb-3&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group-text&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;basic-addon1&#34;</span><span class="p">&gt;</span>@<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;text&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;Username&#34;</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">&#34;Username&#34;</span> <span class="na">aria-describedby</span><span class="o">=</span><span class="s">&#34;basic-addon1&#34;</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group mb-3&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;text&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;Recipient&#39;s username&#34;</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">&#34;Recipient&#39;s username&#34;</span> <span class="na">aria-describedby</span><span class="o">=</span><span class="s">&#34;basic-addon2&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group-text&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;basic-addon2&#34;</span><span class="p">&gt;</span>@example.com<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

                <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&#34;basic-url&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-label&#34;</span><span class="p">&gt;</span>Your vanity URL<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group mb-3&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group-text&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;basic-addon3&#34;</span><span class="p">&gt;</span>https://example.com/users/<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;text&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;basic-url&#34;</span> <span class="na">aria-describedby</span><span class="o">=</span><span class="s">&#34;basic-addon3&#34;</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group mb-3&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group-text&#34;</span><span class="p">&gt;</span>$<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;text&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">&#34;Amount (to the nearest dollar)&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group-text&#34;</span><span class="p">&gt;</span>.00<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group mb-3&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;text&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;Username&#34;</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">&#34;Username&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group-text&#34;</span><span class="p">&gt;</span>@<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;text&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;Server&#34;</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">&#34;Server&#34;</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group&#34;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;input-group-text&#34;</span><span class="p">&gt;</span>With textarea<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">textarea</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">&#34;With textarea&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">textarea</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            </code>
        </pre>
    </div>
    
</template>

<script>
export default {
    name : 'InputGroup'
}
</script>