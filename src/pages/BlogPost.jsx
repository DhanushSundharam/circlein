import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { Play, Link as LinkIcon } from 'lucide-react';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  // Scroll to top on load and set SEO
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (blog) {
      document.title = `${blog.title} | CircleInd Blog`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = blog.summary;
    }
  }, [blog]);

  if (!blog) {
    return <div className="blog-container" style={{paddingTop: '120px'}}><h2>Blog post not found.</h2><Link to="/blog">Return to blog index</Link></div>;
  }

  return (
    <article className="blog-post-page">
      <div className="blog-post-header">
        <div className="blog-post-meta">
          <span>{blog.date}</span>
          <span className="dot-divider">•</span>
          <span>{blog.category}</span>
          <span className="dot-divider">•</span>
          <span>Publication</span>
        </div>
        <h1 className="blog-post-title">{blog.title}</h1>
        
        <div className="blog-post-actions">
          <button className="blog-action-btn">
            <div className="play-icon-wrap"><Play size={12} fill="currentColor" /></div>
            Listen to article
            <span className="blog-action-time">{blog.readTime}</span>
          </button>
          
          <button className="blog-action-btn share-btn">
            <LinkIcon size={14} /> Share
          </button>
        </div>
      </div>

      <div className="blog-post-body">
        <aside className="blog-sidebar">
          <div className="sidebar-sticky">
            <h3 className="sidebar-title">In this article</h3>
            <ul className="sidebar-toc">
              <li><a href="#safeguards">Strengthening safeguards for more capable drivers</a></li>
              <li><a href="#alignment">Alignment in Driver Behavior</a></li>
              <li><a href="#red-teaming">Red-teaming Our Research Environments</a></li>
              <li><a href="#next">What's next</a></li>
            </ul>
          </div>
        </aside>
        
        <div 
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
      </div>
    </article>
  );
};

export default BlogPost;
