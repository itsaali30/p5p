for file in *.vue; do
    newfile="${file%.vue}.js"
    content=$(awk '
        BEGIN { insideTemplate=0; insideScript=0; template=""; }
        /<template>/ { insideTemplate=1; next; }
        /<\/template>/ { insideTemplate=0; next; }
        /<script>/ { insideScript=1; next; }
        /<\/script>/ { insideScript=0; next; }
        insideTemplate { template = template $0 "\n"; }
        END { print "export default {\n    template: `\n    <div>\n" template "    </div>\n    `\n};" }
    ' "$file")
    echo "$content" > "$newfile"
done
