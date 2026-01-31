import { useState } from 'react'

function MainContent() {
  const [postContent, setPostContent] = useState({
    author: "",
    title: "",
    body: "",
    isPublic: false,
  });

  function handleFormData(e) {
    const { name, value, type, checked } = e.target;

    setPostContent({
      ...postContent,
      [name]: type === "checkbox" ? checked : value
    });
  }

  return (
    <form>
      <input
        type="text"
        name="author"
        placeholder="Nome Autore"
        value={postContent.author}
        onChange={handleFormData}
      />

      <input
        type="text"
        name="title"
        placeholder="Titolo Post"
        value={postContent.title}
        onChange={handleFormData}
      />

      <textarea
        name="body"
        placeholder="Scrivi il post..."
        value={postContent.body}
        onChange={handleFormData}
      />

      <label>
        Pubblico:
        <input
          type="checkbox"
          name="isPublic"
          checked={postContent.isPublic}
          onChange={handleFormData}
        />
      </label>

        <div className='post-preview' >
            <h3>IL TUO POST</h3>
            <p><strong>AUTORE:</strong>{postContent.author}</p>
            <p><strong>TITOLO:</strong>{postContent.title}</p>
            <p>{postContent.body || "Scrivi qui i tuoi pensieri"}</p>
            <p>{postContent.isPublic ? "Pubblico" : "Privato"}</p>
        </div>
    </form>
  );
}

export default MainContent;
